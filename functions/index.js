/**
 * Dependencies
 */
const { config, database } = require('firebase-functions');
const firebase = require('firebase-admin');
const admin = firebase.initializeApp(config().firebase);

/**
 * Constants
 */
const REPO_REF = '/repos';
const TAGS_REF = '/tags';

/**
 * Functions
 */
exports.onRepoWrite = database.ref(REPO_REF).onWrite(event => {
  /**
   * We regenerate the tags list on every write to the ref
   */
  const tagsObj = {};

  const repos = event.data.forEach(snap => {
    const { repo, tags } = snap.val();

    tags.forEach(tag => {
      if (!tagsObj[tag]) tagsObj[tag] = 0;
      tagsObj[tag]++;
    });
  });

  const tags = Object.keys(obj).map(key => ({ tag: key, count: obj[key] }));

  return admin.database().ref(TAGS_REF).set(tags);
});