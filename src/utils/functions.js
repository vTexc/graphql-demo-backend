const isExtension = (file, ext) => {
  const splittedName = file.split('.');
  const fileExt = splittedName[splittedName.length - 1];
  return fileExt === ext;
};

const isSomeExtension = (file, exts) => exts.some((ext) => isExtension(file, ext));

module.exports = {
  isExtension,
  isSomeExtension,
};
