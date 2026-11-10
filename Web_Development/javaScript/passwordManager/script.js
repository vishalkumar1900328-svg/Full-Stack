const passwordForm = document.getElementById("passwordForm");
const passwordList = document.getElementById("passwordList");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

const modalElement = document.getElementById("passwordModal");
const passwordModal = new bootstrap.Modal(modalElement);

const toastElement = document.getElementById("successToast");
const successToast = new bootstrap.Toast(toastElement);

// Load saved passwords
let passwords = JSON.parse(localStorage.getItem("demoPasswords") || "[]");

function saveData() {
  localStorage.setItem("demoPasswords", JSON.stringify(passwords));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function safeWebsiteURL(value) {
  try {
    const parsedURL = new URL(value);

    if (parsedURL.protocol === "https:" || parsedURL.protocol === "http:") {
      return parsedURL.href;
    }
  } catch (error) {
    return null;
  }

  return null;
}

function displayPasswords(data = passwords) {
  passwordList.innerHTML = "";

  if (data.length === 0) {
    emptyMessage.style.display = "block";

    document.getElementById("resultCount").textContent = "0 records";

    return;
  }

  emptyMessage.style.display = "none";

  data.forEach((item) => {
    const row = document.createElement("tr");

    const safeURL = safeWebsiteURL(item.url);

    row.innerHTML = `
            <td>
                <span class="website-name">
                    ${escapeHTML(item.website)}
                </span>
                ${
                  safeURL
                    ? `
                    <br>
                    <a href="${escapeHTML(safeURL)}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="website-link small">
                       Visit Website
                    </a>
                `
                    : ""
                }
            </td>

            <td>${escapeHTML(item.username)}</td>

            <td>
                <span class="password-text"
                      id="password-${escapeHTML(item.id)}">
                    ••••••••
                </span>

                <button class="eye-btn toggle-password"
                        data-id="${escapeHTML(item.id)}"
                        title="Show or hide password">
                    <i class="bi bi-eye"></i>
                </button>
            </td>

            <td>
                <button class="action-btn edit-btn"
                        data-action="edit"
                        data-id="${escapeHTML(item.id)}">
                    <i class="bi bi-pencil"></i> Edit
                </button>

                <button class="action-btn delete-btn"
                        data-action="delete"
                        data-id="${escapeHTML(item.id)}">
                    <i class="bi bi-trash"></i> Delete
                </button>
            </td>
        `;

    passwordList.appendChild(row);
  });

  document.getElementById("resultCount").textContent = `${data.length} records`;
}

function updateStatistics() {
  document.getElementById("totalPasswords").textContent = passwords.length;

  const websites = new Set(passwords.map((item) => item.website.toLowerCase()));

  document.getElementById("totalWebsites").textContent = websites.size;
}

function openAddModal() {
  passwordForm.reset();

  document.getElementById("editId").value = "";

  document.getElementById("modalTitle").textContent = "Add New Password";

  document.getElementById("password").type = "password";

  passwordModal.show();
}

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = document.getElementById("editId").value;

  const website = document.getElementById("website").value.trim();

  const url = document.getElementById("url").value.trim();

  const username = document.getElementById("username").value.trim();

  const password = document.getElementById("password").value;

  // Validate required fields
  if (!website || !url || !username || !password.trim()) {
    alert("Please fill all the fields.");
    return;
  }

  const validURL = safeWebsiteURL(url);

  if (!validURL) {
    alert("Please enter a valid HTTP or HTTPS website URL.");
    return;
  }

  if (id) {
    // Update existing password
    const index = passwords.findIndex((item) => item.id === id);

    if (index !== -1) {
      passwords[index] = {
        ...passwords[index],
        website,
        url: validURL,
        username,
        password,
      };
    }

    showToast("Password updated successfully!");
  } else {
    // Add new password
    const newPassword = {
      id: crypto.randomUUID(),
      website,
      url: validURL,
      username,
      password,
    };

    passwords.push(newPassword);

    showToast("Password added successfully!");
  }

  saveData();

  displayPasswords();

  updateStatistics();

  passwordForm.reset();

  passwordModal.hide();
});

// EDIT PASSWORD

function editPassword(id) {
  const item = passwords.find((password) => password.id === id);

  if (!item) return;

  document.getElementById("editId").value = item.id;

  document.getElementById("website").value = item.website;

  document.getElementById("url").value = item.url;

  document.getElementById("username").value = item.username;

  document.getElementById("password").value = item.password;

  document.getElementById("password").type = "password";

  document.getElementById("modalTitle").textContent = "Edit Password";

  passwordModal.show();
}

// DELETE PASSWORD

function deletePassword(id) {
  const confirmation = confirm(
    "Are you sure you want to delete this password?",
  );

  if (!confirmation) return;

  passwords = passwords.filter((item) => item.id !== id);

  saveData();

  displayPasswords();

  updateStatistics();

  showToast("Password deleted successfully!");
}

// SHOW / HIDE PASSWORD

function togglePassword(id, button) {
  const item = passwords.find((password) => password.id === id);

  const passwordElement = document.getElementById(`password-${id}`);

  if (!item || !passwordElement) return;

  const icon = button.querySelector("i");

  const isVisible = passwordElement.dataset.visible === "true";

  if (isVisible) {
    passwordElement.textContent = "••••••••";

    passwordElement.dataset.visible = "false";

    icon.className = "bi bi-eye";
  } else {
    passwordElement.textContent = item.password;

    passwordElement.dataset.visible = "true";

    icon.className = "bi bi-eye-slash";
  }
}

// SEARCH PASSWORDS

searchInput.addEventListener("input", function () {
  const searchValue = this.value.toLowerCase().trim();

  const filteredPasswords = passwords.filter((item) => {
    return (
      item.website.toLowerCase().includes(searchValue) ||
      item.username.toLowerCase().includes(searchValue)
    );
  });

  displayPasswords(filteredPasswords);
});

// FORM PASSWORD VISIBILITY

document.getElementById("formToggle").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");

  const icon = this.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    icon.className = "bi bi-eye-slash";
  } else {
    passwordInput.type = "password";

    icon.className = "bi bi-eye";
  }
});

// HANDLE TABLE BUTTONS

passwordList.addEventListener("click", function (event) {
  const toggleButton = event.target.closest(".toggle-password");

  if (toggleButton) {
    togglePassword(toggleButton.dataset.id, toggleButton);

    return;
  }

  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) return;

  const id = actionButton.dataset.id;

  if (actionButton.dataset.action === "edit") {
    editPassword(id);
  } else if (actionButton.dataset.action === "delete") {
    deletePassword(id);
  }
});

// SUCCESS TOAST

function showToast(message) {
  document.getElementById("toastMessage").textContent = message;

  successToast.show();
}

// INITIALIZE APPLICATION

displayPasswords();

updateStatistics();
