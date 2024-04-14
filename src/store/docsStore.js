import {types} from 'mobx-state-tree';
import {flow} from "mobx";
import {getReq} from "../components/utils/apiCalls";
import {API_GET_ALL_DOCS, API_GET_VERSION_DOC} from "../components/utils/constants";

export const Doc = types
    .model('Doc', {
        id: types.identifierNumber,
        infoDocId: types.integer,
        docName: types.string,
        author: types.string,
        docInputNumber: types.optional(types.string, ""),
        docOutputNumber: types.maybeNull(types.string),
        dateInit: types.string
    })
    .actions(() => {
        return {}
    });
export const VersionDoc = types.model('VersionDoc', {
    id: types.identifierNumber,
    docId: types.integer,
    number: types.integer,
    author: types.maybeNull(types.string),
    fileName: types.maybeNull(types.string),
    fileType: types.maybeNull(types.string)
})
const DocsStore = types.model('DocsStore', {
    docs: types.array(Doc),
    versionDocs: types.array(VersionDoc),
    login: types.optional(types.string,"admin"),
    docIdSelected: types.maybeNull(types.integer),
}).actions((self) => ({
    setDocs(data) {
        self.docs = data;
    },
    setVersionDocs(data) {
        self.versionDocs = data;
    },
    setDocIdSelected(data) {
        self.docIdSelected = data;
    },
    setLogin(data) {
        self.login = data;
    }
})).actions(self => {
    return {
        getDocs: flow(function* () {
            let actual = yield getReq(API_GET_ALL_DOCS, true);
            self.setDocs(actual);
        }),
        getVersionsDoc: flow(function* () {
            let actual = yield getReq(API_GET_VERSION_DOC, true, self.docIdSelected);
            self.setVersionDocs(actual)
            return actual;
        })
    }

});


export default DocsStore;
