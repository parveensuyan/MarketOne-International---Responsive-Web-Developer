function contactUsButtonClick() {
	var first_name = $("#first-name").val();
	var last_name = $("#last-name").val();
	var title = $("#title").val();
	var email_address = $("#email-address").val();
	var phone = $("#phone").val();
	var already_as_client = $("#alreadyasclient").val();

	if (first_name.trim() === '') {
		$(".first-name").addClass("has-error");
	} else {
		$(".first-name").removeClass("has-error");
	}

	if (last_name.trim() === '') {
		$(".last-name").addClass("has-error");
	} else {
		$(".last-name").removeClass("has-error");
	}

	if (title.trim() === '') {
		$(".title").addClass("has-error");
	} else {
		$(".title").removeClass("has-error");
	}

	if (email_address.trim() === '') {
		$(".email").addClass("has-error");
	} else {
		if (!validateEmail(email_address)) {
			$(".email").addClass("has-error");
		}else{
			$(".email").removeClass("has-error");
		}
	}

	if (phone.trim() === '') {
		$(".phone").addClass("has-error");
	} else {
		$(".phone").removeClass("has-error");
	}

	if (already_as_client === '-1') {
		$(".alreadyasclient").addClass("has-error");
	} else {
		$(".alreadyasclient").removeClass("has-error");
	}

	if (first_name && last_name && title && email_address && phone && (already_as_client !== '-1') && validateEmail(email_address)) {
		alert("Thank You! We will get back to you with in two days");
	}

}

const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};
