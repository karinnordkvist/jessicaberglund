/* eslint-disable */
import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Sidor')
    .items([
      S.listItem()
        .title('Startsidan')
        .child(S.document().schemaType('home').documentId('home')),
      S.listItem()
        .title('Foto')
        .child(S.document().schemaType('foto').documentId('foto')),
      S.listItem()
        .title('Flora')
        .child(S.document().schemaType('flora').documentId('flora')),
      S.listItem()
        .title('Samarbeten')
        .child(S.document().schemaType('samarbeten').documentId('samarbeten')),
      S.listItem()
        .title('Om mig')
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Prislista')
        .child(S.document().schemaType('prices').documentId('prices')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'home',
            'foto',
            'flora',
            'samarbeten',
            'prices',
            'price',
            'faq',
            'about',
            'blog',
            'foto',
            'grid',
            'post',
            'category',
          ].includes(listItem.getId())
      ),
    ]);
