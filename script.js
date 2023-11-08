// Blog Post CRUD app

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const addEntryButton = document.getElementById('addEntry');
const entriesList = document.getElementById('entries');
let editingEntry = null;

addEntryButton.addEventListener('click', () => {
    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        if (editingEntry) {
            // Update an existing entry
            editingEntry.querySelector('h2').textContent = title;
            editingEntry.querySelector('p').textContent = content;
            editingEntry = null;
        } else {
            // Create a new entry
            const entryItem = document.createElement('li');
            entryItem.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            entriesList.appendChild(entryItem);

            // Clear the input fields
            titleInput.value = '';
            contentInput.value = '';

            // Attach edit and delete event listeners to the new item
            const editButton = entryItem.querySelector('.edit-button');
            const deleteButton = entryItem.querySelector('.delete-button');
            editButton.addEventListener('click', () => editEntry(entryItem));
            deleteButton.addEventListener('click', () => deleteEntry(entryItem));
        }
    }
});

// Handle editing a blog entry
function editEntry(entryItem) {
    const titleElement = entryItem.querySelector('h2');
    const contentElement = entryItem.querySelector('p');
    titleInput.value = titleElement.textContent;
    contentInput.value = contentElement.textContent;
    editingEntry = entryItem;
}

// Handle deleting a blog entry
function deleteEntry(entryItem) {
    entryItem.remove();
}
