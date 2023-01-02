import { LightningElement } from 'lwc';

import adminPdf from '@salesforce/contentAssetUrl/SalesforceAdminEbookpdf';

export default class ContentAssetFile extends LightningElement {

    adminfile=adminPdf;
}