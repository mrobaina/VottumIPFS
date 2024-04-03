// Fetch NFT data from Vottun API
fetch('https://api.vottun.tech/nft/v1/all')
    .then(response => response.json())
    .then(data => {
        // Process the data and display NFTs
        const nftContainer = document.getElementById('nftContainer');
        data.forEach(nft => {
            const nftCard = document.createElement('div');
            nftCard.classList.add('nft-card');

            const nftImage = document.createElement('img');
            nftImage.classList.add('nft-image');
            nftImage.src = nft.image;
            nftImage.alt = nft.name;

            nftCard.appendChild(nftImage);
            nftContainer.appendChild(nftCard);
        });
    })
    .catch(error => console.error('Error fetching NFTs:', error));
