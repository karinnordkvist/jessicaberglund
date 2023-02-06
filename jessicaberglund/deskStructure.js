/* eslint-disable */
import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Startsidan')
        .child(S.document().schemaType('home').documentId('home')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['home', 'word'].includes(listItem.getId())
      ),
    ]);
