export default attachments => {
  if (!attachments) {
    return null;
  }
  const file = attachments[0];
  return attachments.length && file.ext === "webm";
};
