export const convertIntoBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (file.type.match("images/*")) {
      reject("이미지를 업로드해주세요");
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target && typeof evt.target.result === "string") {
        resolve(evt.target?.result);
      } else {
        reject(Error("적절한 형식의 type 이 아님"));
      }
    };
    reader.readAsDataURL(file);
  });
};

export const getBs64s = async (files: FileList) => {
  return await Promise.all(
    Array.from(files).map((file) => convertIntoBase64(file))
  );
};
