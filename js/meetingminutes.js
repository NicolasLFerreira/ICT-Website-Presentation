JSON = [
	{
		version: "1",
		date: "22/09/2023",
		purpose:
			"To get to know team members and to brainstorm with topic ideas.",
		circulation: "Getting to know the team and thinking of a topic.",
		agenda: [
			{
				id: "1",
				content: "Introductory",
				owner: "All",
				date: "13:00",
			},
			{
				id: "2",
				content: "Switching topic ideas",
				owner: "All",
				date: "13:00",
			},
		],
		discussion: [
			{
				id: "1",
				content:
					"Meeting up for the first time as we introduce our names and interests. Thinking of how to reach out with our other member who is absent.",
			},
			{
				id: "2",
				content:
					"Coming up with a topic where we first came up with Changes in Information Technology.",
			},
			{
				id: "3",
				content:
					"Although after the guest speaker’s presentation help for the assignment 2, we changed our scope topic with Artificial Intelligence. As we narrow down the use of Artificial Intelligence, we came up with image recognition relating to crime.",
			},
		],
		summary: [
			{
				id: "1",
				content: "None",
				owner: "None",
				date: "None",
			},
		],
		next: {
			date: "29/09/2023",
			points: {
				discussion: [
					{
						id: "1",
						content:
							"Identifying who is submitting the assignments.",
					},
					{
						id: "2",
						content:
							"How to divide the workload for the presentation.",
					},
				],
				actions: [
					{
						id: "1",
						content: "Assigning Roles and Responsibilities.",
					},
				],
			},
		},
	},
	{
		version: "2",
		date: "29/09/2023",
		purpose:
			"To assign roles and responsibilities and prepping for the slide presentation.",
		circulation: "Getting ready for the one slide presentation.",
		agenda: [
			{
				id: "1",
				content: "Identifying who is submitting the assignments.",
				owner: "Camille",
				date: "12:15",
			},
			{
				id: "2",
				content: "How to divide the workload for the presentation.",
				owner: "Seth",
				date: "12:30",
			},
			{
				id: "3",
				content: "Assigning roles and responsibilities.",
				owner: "Camille",
				date: "13:00",
			},
		],
		discussion: [
			{
				id: "1",
				content:
					"Clarification with who’s being the editor role. The group came up with dividing the task into 2 (Planner and Executer of the website).",
			},
			{
				id: "2",
				content:
					"Team Leader gets to submit all paperwork before the due date.",
			},
			{
				id: "3",
				content:
					"Figuring which gets part of the assignments and further understanding the scope of our topics.",
			},
			{
				id: "4",
				content:
					"Our presentation slide was already done but waiting for our actual presentation so it’s good that we are quite advance to due dates.",
			},
		],
		summary: [
			{
				id: "1",
				content: "Roles and Responsibilities were divided equally.",
				owner: "All",
				date: "06/10/2023",
			},
		],
		next: {
			date: "06/10/2023",
			points: {
				discussion: [
					{
						id: "1",
						content:
							"Catching up with the progress with the tasks.",
					},
				],
				actions: [
					{
						id: "1",
						content: "Compiling documentation into one document.",
					},
				],
			},
		},
	},
	{
		version: "3",
		date: "06/10/2023",
		purpose: "Introducing and presenting our topic.",
		circulation: "Draft Presentation.",
		agenda: [
			{
				id: "1",
				content: "None",
				owner: "None",
				date: "None",
			},
		],
		discussion: [
			{
				id: "1",
				content:
					"Preparation for the draft presentation. Highlighting the content of what needs to be said while presenting. Assigning who’s to present the roles for introducing the topic/technology and what we will be including for content.",
			},
			{
				id: "2",
				content:
					"Informed the members about submitting the project after presenting.",
			},
		],
		summary: [
			{
				id: "1",
				content: "None",
				owner: "None",
				date: "None",
			},
		],
		next: {
			date: "29/09/2023",
			points: {
				discussion: [],
				actions: [
					{
						id: "1",
						content: "Reherse final presentation.",
					},
				],
			},
		},
	},
	{
		version: "4",
		date: "20/10/2023",
		purpose: "Final Presentation – 3 Slides",
		circulation: "Preparation for 3-slide proposal",
		agenda: [
			{
				id: "1",
				content: "Nothing",
				owner: "None",
				date: "None",
			},
		],
		discussion: [
			{
				id: "1",
				content:
					"Presenting early to get early feedback and update changes if necessary.",
			},
			{
				id: "2",
				content:
					"Basically, catching up with the progress of the website.",
			},
			{
				id: "3",
				content:
					"Informed the members about submitting the project after the presentation.",
			},
		],
		summary: [
			{
				id: "1",
				content: "None",
				owner: "None",
				date: "None",
			},
		],
		next: {
			date: "None",
			points: {
				discussion: [],
				actions: [],
			},
		},
	},
];

function create4ItemTable(name, item) {
	var row = document.createElement("tr");

	var id = document.createElement("td");
	var content = document.createElement("td");
	var owner = document.createElement("td");
	var date = document.createElement("td");

	id.textContent = item.id;
	content.textContent = item.content;
	owner.textContent = item.owner;
	date.textContent = item.date;

	row.appendChild(id);
	row.appendChild(content);
	row.appendChild(owner);
	row.appendChild(date);

	document.getElementById(name + "-table").append(row);
}

// query dom element
const mselect = document.getElementById("meeting-select");

console.log(JSON[0].agenda);

// declare a function to iterate over the meeting-info divs
const updateInfo = () => {
	// Team Proposal Introductory
	document.getElementById("b2").textContent = JSON[mselect.value].purpose;
	document.getElementById("d2").textContent = JSON[mselect.value].date;
	document.getElementById("e2").textContent = JSON[mselect.value].version;

	// Circulation
	document.getElementById("circulation").textContent =
		JSON[mselect.value].circulation;

	// Agenda
	document.getElementById("agenda-table").innerHTML = "";
	JSON[mselect.value].agenda.forEach(function (item) {
		create4ItemTable("agenda", item);
	});

	// Discussions
	document.getElementById("discussion-table").innerHTML = "";
	JSON[mselect.value].discussion.forEach(function (item) {
		var row = document.createElement("tr");

		var id = document.createElement("td");
		var content = document.createElement("td");

		id.textContent = item.id;
		content.textContent = item.content;

		row.appendChild(id);
		row.appendChild(content);

		document.getElementById("discussion-table").append(row);
	});

	//Summary
	document.getElementById("summary-table").innerHTML = "";
	JSON[mselect.value].summary.forEach(function (item) {
		create4ItemTable("summary", item);
	});

	console.log(JSON[mselect.value].next.date);

	//Next discussion
	document.getElementById("next-date").innerHTML =
		"<u><i>Date: " + JSON[mselect.value].next.date + "</u></i>";
	document.getElementById("next-table").innerHTML = "";

	JSON[mselect.value].next.points.discussion.forEach(function (item) {
		var row = document.createElement("tr");

		var id = document.createElement("td");
		var content = document.createElement("td");

		id.textContent = item.id;
		content.textContent = item.content;

		row.appendChild(id);
		row.appendChild(content);

		document.getElementById("next-table").appendChild(row);
	});

	//Next actions

	var r = document.createElement("tr");
	var label = document.createElement("td");
	label.colSpan = "2";
	label.innerHTML =
		"<u><i>Action Items to be discussed in the next meeting:</u></i>";
	r.appendChild(label);
	document.getElementById("next-table").appendChild(r);

	JSON[mselect.value].next.points.actions.forEach(function (item) {
		var row = document.createElement("tr");

		var id = document.createElement("td");
		var content = document.createElement("td");

		id.textContent = item.id;
		content.textContent = item.content;

		row.appendChild(id);
		row.appendChild(content);

		document.getElementById("next-table").appendChild(row);
	});
};

// add the event listener to the meetingSelect listening for 'change' event
mselect.addEventListener("change", updateInfo);
// call update() function to initially show only the selected value
updateInfo();
