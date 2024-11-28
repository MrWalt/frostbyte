export function formatCategoryTitle(title) {
  let newTitle;
  if (title.includes("-")) {
    newTitle = title.split("-");

    let placeholderTitles = newTitle.map((item) =>
      item.charAt(0).toUpperCase()
    );

    newTitle = placeholderTitles.map((item, i) => {
      return item.concat(newTitle.at(i).slice(1));
    });

    return newTitle.join(" ");
  }

  newTitle = title.charAt(0).toUpperCase();
  newTitle += title.slice(1);
  return newTitle;
}
