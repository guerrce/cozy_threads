import { COLLECTION_ALL_LABEL, COLLECTION_NAME_TO_LABEL } from "../../../constants/collections";

const getCollectionsTitle = (name: string) => {
  const label: string | undefined = COLLECTION_NAME_TO_LABEL[name]

  const titlePrefix = "Collections";
  let titleSuffix = label;
  if (label === undefined){
    titleSuffix = COLLECTION_ALL_LABEL;
  }
  return `${titlePrefix}: ${titleSuffix}`
};

export default getCollectionsTitle;
