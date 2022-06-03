//chalange 3 

     var romanMatrix = [
        [2000,'MM'],
        [1900,'MCM'],
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
      ];
      
      function convertToRoman(num) {
        if (num === 0) {
          return [];
        }
        for (var i = 0; i < romanMatrix.length; i++) {
          if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
          }
        }
      }
      console.log(convertToRoman(1600))