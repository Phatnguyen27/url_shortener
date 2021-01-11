import 'regenerator-runtime/runtime';
import {delay} from "redux-saga/effects";
import axios from "axios";

export const UrlShortener = async (string) => {
    try {
        return "miniurl/id=ded2das3221s";
    } catch (error) {
        return `${error}`;
    }
};