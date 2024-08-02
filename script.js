function showCategory(categoryId) {
  
  const categories = document.querySelectorAll('.gallery');

  
  categories.forEach(category => {
    category.classList.add('hidden');
  });

  
  document.getElementById(categoryId).classList.remove('hidden');
}


function showSubCategory(subCategoryId) {
  
  const subCategories = document.querySelectorAll('.sub-gallery');

  
  subCategories.forEach(subCategory => {
    subCategory.classList.add('hidden');
  });


  document.getElementById(subCategoryId).classList.remove('hidden');
}


document.addEventListener('DOMContentLoaded', () => {
  showCategory('mammals');
});