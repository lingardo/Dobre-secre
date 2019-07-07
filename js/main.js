$(document).ready(function () {

	//<!-- Табы на JS -->
	$(".popupForm").on("click", ".tab", function () {
		//Удаляем классы active
		$(".popupForm").find(".active").removeClass("active");

		// Добавляем класс active
		$(this).addClass("active");
		$(".fizFace").eq($(this).index()).addClass("active");
	});


	//<!-- Табы на JS для способов оплаты -->
	$(".karty").on("click", ".tabs", function () {
		//Удаляем классы actives
		$(".karty .tabs").removeClass("actives");

		// Добавляем класс actives
		$(this).addClass("actives");
	});


	//<!-- Табы на JS для пузыря диалога-->
	$(".typeOfHelpKind").on("click", ".tabsu", function () {
		//Удаляем классы actives
		$(".typeOfHelpKind").find(".activest").removeClass("activest");

		// Добавляем класс activest
		$(this).addClass("activest");
	});

});

// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function () {
	$('.js-overlay-campaign').fadeIn();

});

// закрыть на крестик
$('.js-close-campaign').click(function () {
	$('.js-overlay-campaign').fadeOut();
	$('style').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaign').fadeOut();
	}
});


// Модальное окно c формами

// открыть по кнопке
$('.js-button-campaignForm').click(function () {
	$('.js-overlay-campaignForm').fadeIn();

});

// закрыть на крестик
$('.js-close-campaignForm').click(function () {
	$('.js-overlay-campaignForm').fadeOut();
	$('style').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaignForm');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaignForm').fadeOut();
	}
});


// Модальное окно поиск

// открыть по кнопке
$('.js-button-campaignSearch').click(function () {
	$('.js-overlay-campaignSearch').fadeIn();

});

// закрыть на крестик
$('.js-close-campaignSearch').click(function () {
	$('.js-overlay-campaignSearch').fadeOut();
	$('style').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaignSearch');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaignSearch').fadeOut();
	}
});

// Модальное окно активный поиск

// открыть по кнопке
$('.js-button-campaignActiveSearch').click(function () {
	$('.js-overlay-campaignActiveSearch').fadeIn();

});

// закрыть на крестик
$('.js-close-campaignActiveSearch').click(function () {
	$('.js-overlay-campaignActiveSearch').fadeOut();
	$('style').css('filter', 'none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaignActiveSearch');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaignActiveSearch').fadeOut();
	}
});