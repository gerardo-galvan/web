import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "/api/movies";

@inject(HttpClient)
export class MovieData {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getById(id) {
        return this.http.get(`${baseUrl}/${id}`)
                        .then(response => response.content);
    }

    getAll() {
        return this.http.get(baseUrl)
                        .then(response => {
                            return response.content;
                        });
    }

}