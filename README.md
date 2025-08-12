# Ansible PureFA Snippets

**Ansible PureFA Snippets** is a Visual Studio Code extension that allows you to quickly search and insert Pure Storage FlashArray (PURE FA) Ansible snippets directly into your editor.  
This extension helps you automate Pure Storage FlashArray management tasks by providing ready-to-use, trusted Ansible playbook examples.

---

## Features

- Supports **Pure Storage FlashArray Ansible collection version 1.36.0**.
- Search for PureFA Ansible snippets by keyword or description.
- Insert PureFA Ansible tasks into your playbooks with a single click.
- Snippets cover common storage operations: provisioning, masking, snapshot, replication, and more.
- **Hover Suggestions**: Hover over a PureFA module or option name to instantly view detailed documentation, including type, description, and default values. The documentation is formatted for readability and includes color-coded hints.
* **Intelligent Suggestions:**
    * **Module & Option Suggestions:** Get intelligent suggestions for module options and their values as you type.
    * **Task Examples:** Type `purefa:` to filter through all available task examples and insert directly into your editor.
* **Inline Documentation:** Hover over any PureFA module or option to instantly view detailed documentation. The documentation is formatted for readability and includes color-coded hints, along with details on type, description, and default values.

---

## Installation

1. Open **Visual Studio Code**.  
2. Go to the **Extensions** view (`Ctrl+Shift+X`).  
3. Search for `Ansible PureFA Snippets`.  
4. Click **Install**.  

---

## Usage

### Using Snippets via the Command Palette

1. Open a YAML or Ansible playbook file in VS Code.  
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).  
3. Type and select:- `Search PureFA Ansible Snippets - v1.36.0`  
4. Search for a snippet by keyword or description.  
5. Select a snippet to insert it at your cursor location.  

### Using Hover and Autocompletion

-   **Hover**: To view documentation for a module or option, simply move your mouse cursor over its name. A hover popup will appear with a formatted summary.
-   **Autocompletion**: As you type a module option, VS Code will suggest available options. After typing a colon (`:`) and a space, the extension will suggest valid values or templates for that option.

### Demos
 
![PureFA Ansible Snippets - Demo1](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-purefa/refs/heads/release/1.36.0/src/resources/demo1.gif)

![PureFA Ansible Snippets - Demo2](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-purefa/refs/heads/release/1.36.0/src/resources/demo2.gif)

![PureFA Ansible Snippets - Demo3](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-purefa/refs/heads/release/1.36.0/src/resources/demo3.gif)

---

## References

- https://galaxy.ansible.com/ui/repo/published/purestorage/flasharray 
- https://github.com/Pure-Storage-Ansible/FlashArray-Collection 

---

## License

MIT License  

---

## Author

Developed and maintained by [Rajesh V U](https://www.rajeshvu.com)
