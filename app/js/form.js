// Email validator

function validateEmail(email) {
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	if (emailRegex.test(email)) {
		return true;
	} else {
		return false;
	}
}

// Phone validator

function validatePhoneNumber(tel) {
	let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
	return reg.test(tel);
}

function inputReport(input, message) {
	input.setCustomValidity(message);
    input.reportValidity();
}

export default function Form() {

	document.querySelectorAll(".form-label").forEach(label => {
		const textarea = label.querySelector("textarea");
		textarea?.addEventListener("input", () => {
			textarea.parentElement.dataset.text = textarea.value;
		})

		const input = label.querySelector("input");
		input?.addEventListener("input", () => {
			input.classList.remove("is-error");
			input.setCustomValidity('');
		})

		input?.addEventListener("blur", () => {
			const value = input.value.trim();
			if(value && !input.classList.contains("is-error")) {
				if(input.type == "email" && !validateEmail(value)) {
					input.classList.add("is-error");
				} else if(input.type == "tel" && !validatePhoneNumber(value)) {
					input.classList.add("is-error");
				}
			} else {
				input.value = value;
			}
		})

		input?.closest("form").addEventListener("submit", event => {
			event.preventDefault();

			if(input.type == "email" && input.value.trim() && !validateEmail(input.value)) {
				input.classList.add("is-error");
				inputReport(input, 'Please enter a valid email address.');
			} else if(input.type == "tel" && input.value.trim() && !validatePhoneNumber(input.value)) {
				input.classList.add("is-error");
				inputReport(input, 'Please enter a valid phone number.');
			}
		})
	});

}