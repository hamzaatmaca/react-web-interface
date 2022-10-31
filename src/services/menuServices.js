const menuServices = () => {
  const productPhotos = [
    "hamburger.jpg",
    "restorant1.jpg",
    "kebap.jpg",
    "hamburger.jpg",
    "restorant1.jpg",
    "kebap.jpg",
  ];
  const productPrices = ["12 TL", "45 TL", "64 TL", "12 TL", "45 TL", "64 TL"];
  const productText = [
    "Hamburger Menu",
    "Kebap Menu",
    "Pide Menu",
    "Hamburger Menu",
    "Kebap Menu",
    "Pide Menu",
  ];
  const productName = [
    "Hamburger",
    "Kebap",
    "Pide",
    "Hamburger",
    "Kebap",
    "Pide",
  ];

  let menuPayload = {
    productPhotos: productPhotos,
    productPrice: productPrices,
    productText: productText,
    productName: productName,
  };

  return menuPayload;
};

export default menuServices;
