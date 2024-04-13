import DocsStore from "./docsStore";
import {types} from "mobx-state-tree";

const RootStore = types.model('RootStore', {
    docsStore: types.optional(DocsStore, {}),
});


export default RootStore;