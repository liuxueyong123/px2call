import * as vscode from 'vscode';

const convertText = (code: string): string => {
	if (!code) {return '';};

	return code.replace(/(\d+(\.\d+)?)px/g, (word: string) => {
		return `call($fn, ${word.replace('px', '')})`;
	});
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('px2call.px2vw', () => {
		const editor = vscode.window.activeTextEditor;
		if(!editor) {return;}
		const allSelections = editor.selections;

		editor.edit(editBuilder => {
			// 遍历并替换文本
			allSelections.forEach(selection => {
				const text = editor.document.getText(selection);
				editBuilder.replace(selection, convertText(text));
			});
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
