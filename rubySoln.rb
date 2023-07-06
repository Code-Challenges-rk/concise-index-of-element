def find_index(arr, elem)
    index = arr.index(elem)
    index.nil? ? "not found" : index
  end
  
  puts find_index([1, 2, 3, 4, 5], 3)

#   function find(arr, elem) {
#   for (let i = 0; i < arr.length; i++) {
#     if (arr[i] === elem) {
#       return i;
#     }
#   }
#   return "not found";
# }

def find(arr, elem)
    arr.each_with_index do |item, index|
      return index if item == elem
    end
    "not found"
end

puts find([1, 2, 3, 4, 5], 1)