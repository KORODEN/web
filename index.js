const exercesesBlock = document.querySelector(".exerceses");
const body = document.querySelector("body");

const exercises = [
	{
		theme: "Работа с числами",
		tasks: [
			"Дано число. Если оно является чётным - вывести true, иначе вывести false.",
			"Дано число. Если оно является целым - вывести true, иначе вывести false.",
			"Дано число. Посчитать сумму цифр числа.",
		],
	},
	{
		theme: "Работа с массивами",
		tasks: [
			"Дан массив чисел. Посчитать сумму всех элементов массива.",
			"Дан массив чисел. Развернуть массив.",
			"Дан массив чисел. Отсортировать его по возрастанию.",
		],
	},
	{
		theme: "Работа со строками",
		tasks: [
			"Дана строка. Посчитать количество символов в строке.",
			"Дана строка. Опрделить есть ли в строке сочетание 'красавчик'",
			"Дана строка. Посчитать сколько раз в ней встречается символ '.'",
			"Дана строка, в которой введены слова через пробел. Создать массив, элементами которого будут являться слова из предоставленной строки.",
		],
	},
	{
		theme: "Работа с функциями",
		tasks: [
			"Создать функцию, которая принимает на вход два числа и возвращает наибольшее из них.",
			"Создать функцию, которая принимает на вход имя пользователя и выводит в консоль приветствие в формате: '<имя>, салам, Братишка!'",
			"Создать функцию, которая принимает на вход строку из нескольких слов, разделённых запятыми и возвращает количество запятых.",
		],
	},
	{
		theme: "Работа с объектами",
		tasks: [
			"Создать объект, содержащий 5 произвольных полей.",
			"Дан объект. Необходимо вывести его в консоль, сделать его копию, изменив в ней одно поле и вывести копию в консоль.",
			"Дан объект. Вывести в консоль сначала все ключи объекта, а затем все значения.",
		],
	},
	{
		theme: "Произвольная тема",
		tasks: [
			"Дано число. Необходимо определить является ли оно зеркальным. Пример: 12321 - зеркальное, 12341 - не зеркальное.",
			"Создать функцию, которая принимает на вход произвольное количество чисел и возвращает наибольшее из них.",
		],
	},
];

const list = document.createElement("ul");

exercises.forEach((exercise, i) => {
	const tasks = document.createElement("ol");
	list.innerHTML += `<li>${exercise.theme}</li>`;

	exercise.tasks.forEach((task, index) => {
		tasks.innerHTML += `<li>${task}</li>`;
		tasks.innerHTML += `<textarea id="task${i}_${index}"></textarea>`;
		tasks.innerHTML += `<button onclick="eval(task${i}_${index}.value)" title="Результат console.log смотри в консоли">Выполнить</button>`;
	});

	list.append(tasks);
});

exercesesBlock.append(list);

// угары с тёмной темой
const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

if (darkModePreference.matches) {
	body.style.backgroundImage = "url(./image.jpg)";
}

darkModePreference.addEventListener("change", (e) => {
	if (e.matches) {
		body.style.backgroundImage = "url(./image.jpg)";
	} else {
		body.style.backgroundImage = "none";
	}
});
