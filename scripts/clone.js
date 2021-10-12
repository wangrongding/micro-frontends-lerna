var download = require("download-git-repo");

console.log("请耐心等待,各应用正在clone...");

/* let repos = [
	{
		repoUrl:
			"direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch",
		repoName: "test",
	},
	{
		repoUrl:
			"direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch",
		repoName: "test1",
	},
	{
		repoUrl:
			"direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch",
		repoName: "test22",
	},
];

repos.forEach((item, index) => {
	download(
		item.repoUrl,
		"../packages/" + item.repoUrl,
		{ clone: true },
		function (err) {
			console.log(err ? "Error!clone出错,请重新尝试!" + err : "Success~");
		}
	);
}); */

download(
	"direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch",
	"../packages/test123",
	{ clone: true },
	(err) => {
		console.log(err ? "Error!clone出错,请重新尝试!" + err : "Success~");
	}
);
