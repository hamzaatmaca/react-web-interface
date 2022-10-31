const homeServices = () => {
  const sliderPhotos = ["hamburger.jpg", "restorant1.jpg", "kebap.jpg"];
  const branchPhotos = ["hamburger.jpg", "restorant1.jpg", "kebap.jpg"];
  const branchs = ["Antalya", "İzmir", "İstanbul"];
  const text = ["Antalya Şubesi", "İzmir Şubesi", "İstanbul Şubesi"];

  let homePayload = {
    sliderPhotos: sliderPhotos,
    branchPhotos: branchPhotos,
    branchs: branchs,
    text: text,
  };

  return homePayload;
};

export default homeServices;
