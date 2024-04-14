export const API_CREATE_DOC = 'http://localhost:8081/MiniDocumentManagement/api/doc/create';
export const API_REMOVE_DOC = 'http://localhost:8081/MiniDocumentManagement/api/doc/remove';
export const API_CREATE_VERSION_DOC = 'http://localhost:8081/MiniDocumentManagement/api/doc/newversiondoc';
export const API_GET_VERSION_DOC = 'http://localhost:8081/MiniDocumentManagement/api/doc/versiondoc';
export const API_GET_DOC = 'http://localhost:8081/MiniDocumentManagement/api/doc';
export const API_GET_ALL_DOCS = 'http://localhost:8081/MiniDocumentManagement/api/doc/findAll';
export const API_GET_FILE_BY_VERSION_ID = 'http://localhost:8081/MiniDocumentManagement/api/doc/versiondocfile';
export const getDate = (date) => {
    return date.substring(0, 10);
}