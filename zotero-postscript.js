// Note: this file is not used directly by Zotero. Editing it in place has no
// effect. However, because Zotero's / BetterBibTeX's postscript entry is awful,
// it's easier to edit it in a code editor. To have changes take effect, add
// them to Zotero -> Settings -> BetterBibTeX -> Postscript

if (Translator.BetterBibTeX || Translator.BetterBibLaTeX) {
  if (false) {
    Zotero.debug("POSTSCRIPT DEBUG: " + JSON.stringify(zotero));
  }

  if (zotero.itemType === "audioRecording") {
    for (const creator of zotero.creators) {
      if (creator.creatorType === "performer") creator.creatorType = "author";
    }
    tex.addCreators();

    if (tex.has.album && !tex.has.booktitle) {
      tex.add({ name: "booktitle", value: tex.has.album.value });
    }

    if (zotero.url?.includes("soundcloud") && !tex.has.booktitle) {
      tex.add({ name: "booktitle", value: "Artist upload", enc: "verbatim" });
    }

    if (tex.has.medium && !tex.has.howpublished) {
      tex.add({ name: "howpublished", value: tex.has.medium.value });
    }

    if (!tex.has.howpublished && zotero.url) {
      if (zotero.url.includes("soundcloud")) {
        tex.add({ name: "howpublished", value: "Soundcloud" });
      }
      if (zotero.url.includes("spotify")) {
        tex.add({ name: "howpublished", value: "Spotify" });
      }
    }

    if (zotero.url?.includes("spotify")) {
      tex.remove("urldate");
    }
  }

  if (zotero.date?.includes("T")) {
    tex.add({
      name: "date",
      value: zotero.date.substring(0, zotero.date.indexOf("T")),
    });
  }

  if (
    zotero.itemType === "videoRecording" &&
    zotero.url &&
    zotero.url.includes("youtube.com")
  ) {
    for (const creator of zotero.creators) {
      if (creator.creatorType === "director") creator.creatorType = "author";
    }
    tex.addCreators();
  }

  if (!zotero.date) {
    tex.add({
      name: "year",
      value: "\\bibstring{nodate}",
      enc: "verbatim",
    });
  }
}
