const MAX_RATING = 5;

/** Each skill is an array with three elements: name, percent of knowledge and decorating color */

/** Professional Skills */
const python = ['Python', '80%', '#092e20'];
const java = ['Java', '80%', '#e89a13'];
const csharp = ['C#', '80%', '#6a468a'];
const cplusplus = ['C++', '60%', '#799aba'];
const c = ['C', '40%', '#00112c'];
const html = ['HTML5', '60%', '#e34f26'];
const css = ['CSS3', '60%', '#002561'];
const javascript = ['JavaScript', '60%', '#f7df1e'];

/** Personal Skills */
const details = ['Determined', '100%', '#bdc3c7'];
const responsible = ['Responsible', '80%', '#bdc3c7'];
const teamplayer = ['Teamplayer', '60%', '#bdc3c7'];
const competitive = ['Competitive', '60%', '#bdc3c7'];

/** main code */
var professionalSkills = [python, java, csharp, cplusplus, c, html, css, javascript];
var personalSkills = [details, responsible, teamplayer, competitive];

$(document).ready(function() {
  var professional = $('#professionalSkills');
  var personal = $('#personalSkills');
  $('.container').fadeIn(2000);
  for (var i = 0, len = professionalSkills.length; i < len; i++) {
    newDataPercent(professional, professionalSkills[i]);
  }
  for (var i = 0, len = personalSkills.length; i < len; i++) {
    newDataPercent(personal, personalSkills[i]);
  }
  $('head').append('<link rel="stylesheet" type="text/css" href="css/skillBars.css">');
  fillBars();
});

/** Helper skill bars methods */
function newDataPercent(selector, skill) {
  var title = skill[0];
  var knowledge = skill[1];
  var color = skill[2];
  var newNode = `
                  <div class="skillbar clearfix" data-percent="` + knowledge + `">
                    <div class="skillbar-title" style="background: ` + color + `;"><span>` + title + `</span></div>
                    <div class="skillbar-bar" style="background:` + color + `;"></div>
                    <div class="skill-bar-percent">` + knowledge + `</div>
                  </div>
                  `;
  selector.append(newNode);
}

function fillBars() {
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		}, 3000);
	});
}

/** event handling */
$('#gitHubLogo').click(function() {
  var tab = window.open('https://github.com/FranciscoKloganB', '_blank');
  if (tab) {
    tab.focus();
  } else {
    swal({
      title: 'Ups!',
      text: 'To open my GitHub link you must allow pop-ups for my website.',
      confirmButtonText: 'OK',
      width: '40%',
      confirmButtonClass: 'swalOkButton',
    })
  }
});

$('#istMeicProgram').click(function() {
  window.open("https://fenix.tecnico.ulisboa.pt/cursos/meic-t/curriculo", '_blank');
});

$('#istLeicProgram').click(function() {
  window.open("https://fenix.tecnico.ulisboa.pt/cursos/leic-t/curriculo", '_blank');
});

$('#eshteProgram').click(function() {
  window.open("http://www.eshte.pt/contents/ds_documents/par-7287.pdf", '_blank');
});


$('#istMeicCer').css({"color" : "grey"});

/*
$('a[href*="pdf"]').click(function(e) {
  e.preventDefault();            
  var pdf = $(this).attr("href"); // get the url of the pdf
  window.open(pdf, '_blank');     // open the pdf in a new window/tab
});
*/