/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.myproject;

import java.util.ArrayList;

/**
 *
 * @author User
 */
public class Problem {
    private ArrayList<Integer> sequence;
    private int solution;

    public Problem() {
    }

    public Problem(int[] values, int solution) {
        this.solution = solution;
        this.sequence = new ArrayList<>();
        for (int i = 0; i < values.length; i++) {
            this.sequence.add(values[i]);
        }
    }

    public ArrayList<Integer> getSequence() {
        return sequence;
    }

    public void setSequence(ArrayList<Integer> sequence) {
        this.sequence = sequence;
    }

    public int getSolution() {
        return solution;
    }

    public void setSolution(int solution) {
        this.solution = solution;
    }
    
}
