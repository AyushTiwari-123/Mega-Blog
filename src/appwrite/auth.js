// service bna rhe h jisko hmlog appwrite k bhr bhi use kr ske 

import conf  from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account; //account tb bnega jb hmare pas client hoga
// ye method isiliye hmlog yha pe rkhe h kyuki hmlog ko chahiye ki phle koi object(authService. ko cll kre) bnay tb client bne fir hme account ka access mile
    constructor() { //object(authService.) bnne k bad ye directly cll ho jyga
        this.client //client ka refrence die h
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService