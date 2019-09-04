describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        let test1 = [1, 2, 3, 4, 5, 6, 7, 8]
        let test2 = [1, 2, 3, 4, 5, 6, 7]
      expect(split(test1)).toEqual([[1,2,3,4],[5,6,7,8]])
      expect(split(test2)).toEqual([[1,2,3],[4,5,6,7]])
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        let test1 = [ 4, 5, 6, 7 ]
        let test2 = [1, 3 , 6, 9, 10]
        expect(merge(test1, test2)).toEqual([1, 3, 4, 5, 6, 6, 7, 9, 10])
    });
  });