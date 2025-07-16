const produkList = document.querySelectorAll('.produk');

produkList.forEach((produk , index) => {
    setTimeout(() => {
        produk.classList.add('show');

    }, index * 400)
})