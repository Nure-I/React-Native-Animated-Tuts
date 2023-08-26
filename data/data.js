// const expGain = () => `${(Math.floor(Math.random * 10) + 1) * 5}`;
// const mealType = ["Vegan", "Vegetarian", "Fusion", "Nouvelle", "Haute", "Fish"];
// const cousineType = ["dehydrated", "unhealthy", "fast food", "healthy"];
// let getRandom = (arr) => {
// 	const random = Math.floor(Math.random() * arr.length);
// 	return arr[random];
// };
// copy(
// 	JSON.stringify(
// 		[...document.querySelectorAll(".node-recipe")].map((x) => ({
// 			image: x.queryselector(".teaser-item__image img").src,
// 			title: x.queryselector(".teaser-item_image img").title,
// 			description: x.querySelector(".field-name-body").innerText.trim(),
// 			prepTime: x
// 				.querySelector(".teaser-item__info-item--total-time")
// 				.innerText.trim()
// 				.toLocaleLowerCase(),
// 			exp: expGain(),
// 			skill: x
// 				.querySelector(". .teaser-item__info-item--skill-level")
// 				.innerText.trim()
// 				.toLocaleLowerCase(),
// 			cousine: x
// 				.querySelector(" teaser-item_info-item--vegetarian")
// 				?.innerText.trim()
// 				.toLocaleLowerCase(),
// 			type: x
// 				.querySelector(" teaser-item_info-item--healthy")
// 				?.innerText.trim()
// 				.toLocaleLowerCase(),
// 		})),
// 		null,
// 		2
// 	)
// );

export const detailsList = ["prepTime", "exp", "skill", "cousine", "type"];
export const iconsByType = {
	prepTime: "fire",
	exp: "badge",
	skill: "energy",
	cousine: "chemistry",
	type: "drop",
};

export default [
	{
		image:
			"https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg",
		title: "Easy pancakes",
		description:
			"Learn a skill for life with our foolproof easy crêpe recipe that ensures perfect pancakes every time – elaborate flip optional",
		prepTime: "1 hour",
		exp: 10,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated",
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=93,84",
		title: "Best Yorkshire puddings",
		description:
			"Learn a skill for life with our foolproof easy crêpe recipe that ensures perfect pancakes every time – elaborate flip optional",
		prepTime: "1 hour",
		exp: 10,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated",
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=93,84",
		title: "Banana Bread",
		description:
			"Learn a skill for life with our foolproof easy crêpe recipe that ensures perfect pancakes every time – elaborate flip optional",
		prepTime: "1 hour",
		exp: 10,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated",
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=93,84",
		title: "Spaagetti",
		description:
			"Learn a skill for life with our foolproof easy crêpe recipe that ensures perfect pancakes every time – elaborate flip optional",
		prepTime: "1 hour",
		exp: 10,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated",
	},
	{
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=93,84",
		title: "Sandwich",
		description:
			"Learn a skill for life with our foolproof easy crêpe recipe that ensures perfect pancakes every time – elaborate flip optional",
		prepTime: "1 hour",
		exp: 10,
		skill: "easy",
		cousine: "Vegan",
		type: "dehydrated",
	},
];
