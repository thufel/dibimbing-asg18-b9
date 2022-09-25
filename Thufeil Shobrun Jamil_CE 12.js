function sockMerchant(word) {
  
    let socks = {};
    for (let i = 0; i < word.length; i++) {
      socks[word[i]] ? socks[word[i]]++ : (socks[word[i]] = 1);
    }
    let pairs = 0;
    for (let key in socks) {
      pairs += Math.floor(socks[key] / 2);
    }
    return pairs;
  };

    console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]))
    console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]))