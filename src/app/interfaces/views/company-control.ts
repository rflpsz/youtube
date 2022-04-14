import { Company } from '../company';

export interface CompanyControl extends Company {
    followBtn?: boolean;
    connectedBtn?: boolean;
}