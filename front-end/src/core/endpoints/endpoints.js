import {projectsEndpoint} from './projects'
import {mergesEndpoint} from './merges'
import {tokenRequest} from "./token";

export const gitlabEndpoint = 'https://gitlab.nfq.lt/api/v4/projects/';
export const formHeaders = {'Content-Type': 'multipart/form-data'};
export const endpoints = {
    ...tokenRequest,
    ...mergesEndpoint,
    ...projectsEndpoint,
};
