import { projectsEndpoint } from './projects'
import { mergesEndpoint } from './merges'

export const gitlabEndpoint = 'https://gitlab.nfq.lt/api/v4/projects/';
export const gitlabToken = 'T1xoFmWKS6zoAz-Rrjg5';

export const gitHeaders = {
    'Content-Type': 'application/json',
    'Private-Token': gitlabToken,
};

export const formHeaders = {'Content-Type': 'multipart/form-data'};

export const endpoints = {
    ...mergesEndpoint,
    ...projectsEndpoint,
};
