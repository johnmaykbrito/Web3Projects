/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jsf;

import java.io.Serializable;
import java.util.Date;
import javax.enterprise.context.SessionScoped;
import javax.faces.bean.ManagedBean;

/**
 *
 * @author User
 */
@ManagedBean(name = "Person")
@SessionScoped
public class PersonBean implements Serializable {

    private String name = "";
    private String password = "";
//    private Date date = null;

    public PersonBean() {
        name = "";
        password = "";
    }

    public String getName() {
        if (!"".equals(name)) {
            return "Write your name in here";
        }
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
