/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myproject;

import java.util.ArrayList;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 *
 * @author User
 */
@ManagedBean(name="Quiz")
@SessionScoped
public class Quiz {
    
    private ArrayList<Problem> problems = new ArrayList<>();
    private int currentIndex;
    private int score;

    public Quiz() {
        problems.add(
                new Problem(new int[]{3, 1, 4, 1, 5}, 9)); // pi
        problems.add(
                new Problem(new int[]{1, 1, 2, 3, 5}, 8)); // fibonacci
        problems.add(
                new Problem(new int[]{1, 4, 9, 16, 25}, 36)); // squares
        problems.add(
                new Problem(new int[]{2, 3, 5, 7, 11}, 13)); // primes
        problems.add(
                new Problem(new int[]{1, 2, 4, 8, 16}, 32)); // powers of 2
    }    

    public ArrayList<Problem> getProblems() {
        return problems;
    }

    public void setProblems(ArrayList<Problem> prob) {
        this.problems = prob;
        this.currentIndex = 0;
        this.score = 0;
    }

    public Problem getCurrent() {
        return problems.get(currentIndex);
    }

    public int getScore() {
        return score;
    }
    
    public String getAnswer() {
        return "";
    }
    
    public void setAnswer(String newValue) {
        try {
            int answer = Integer.parseInt(newValue.trim());
            if (getCurrent().getSolution() == answer) {
                score++;
            }
            this.currentIndex = (this.currentIndex + 1) % this.problems.size();
        } catch (NumberFormatException e) {
        }
    }
}
