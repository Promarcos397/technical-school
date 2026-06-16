from pathlib import Path

# Directories and files to ignore to save AI context space
IGNORE_DIRS = {
    'node_modules', '.git', '.svelte-kit', 'build', 'dist', 
    '.wrangler', '__pycache__', 'venv', 'env', '.cache'
}
IGNORE_FILES = {'.DS_Store', 'project_context.txt'}

def generate_tree(directory, prefix=""):
    path = Path(directory)
    
    # Filter out ignored directories and files
    contents = [
        p for p in path.iterdir() 
        if p.name not in IGNORE_DIRS and p.name not in IGNORE_FILES
    ]
    # Sort directories first, then files alphabetically
    contents.sort(key=lambda x: (x.is_file(), x.name.lower()))
    
    tree_str = ""
    pointers = ["├── "] * (len(contents) - 1) + ["└── "] if contents else []
    
    for pointer, path_item in zip(pointers, contents):
        tree_str += f"{prefix}{pointer}{path_item.name}\n"
        if path_item.is_dir():
            # Extend the prefix for nested folders
            extension = "│   " if pointer == "├── " else "    "
            tree_str += generate_tree(path_item, prefix=prefix + extension)
            
    return tree_str

if __name__ == "__main__":
    root_dir = Path(".")
    output_file = "project_context.txt"
    
    # Generate the tree starting with the root folder name
    tree = f"{root_dir.resolve().name}/\n" + generate_tree(root_dir)
    
    # Write to a text file
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("Project Architecture:\n")
        f.write("=====================\n")
        f.write(tree)
        
    print(f"Success! File tree saved to {output_file}")