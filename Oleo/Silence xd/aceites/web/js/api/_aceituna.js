/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const aceitunaAPI_auto = {

    /** Gets all entries from 'aceituna' */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/aceituna`, requestOptions);
        return response.data;
    },

    /** Gets an entry from 'aceituna' by its primary key */
    getById: async function(aceitunaID) {
        let response = await axios.get(`${BASE_URL}/aceituna/${aceitunaID}`, requestOptions);
        return response.data[0];
    },

    /** Creates a new entry in 'aceituna' */
    create: async function(formData) {
        let response = await axios.post(`${BASE_URL}/aceituna`, formData, requestOptions);
        return response.data;
    },

    /** Updates an existing entry in 'aceituna' by its primary key */
    update: async function(formData, aceitunaID) {
        let response = await axios.put(`${BASE_URL}/aceituna/${aceitunaID}`, formData, requestOptions);
        return response.data;
    },

    /** Deletes an existing entry in 'aceituna' by its primary key */
    delete: async function(aceitunaID) {
        let response = await axios.delete(`${BASE_URL}/aceituna/${aceitunaID}`, requestOptions);
        return response.data;
    },
};

export { aceitunaAPI_auto };