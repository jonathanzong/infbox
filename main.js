'use strict';

$(document).ready(function() {
  $('choices choice').click(function() {
    $('choices choice').removeClass("disabled").not(this).addClass("disabled");

    var topic = $(this).parent().attr('topic');
    var choiceIndex = $(this).index();

    var topicResults = $('results[topic="' + topic + '"]');
    
    $('results').slice(topicResults.index('results')).find('result').hide();

    topicResults.find('result').hide().eq(choiceIndex).slideDown(100);
  });

  $('results result').hide();
  $('choices choice').addClass('disabled');
});