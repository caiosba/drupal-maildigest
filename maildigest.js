function maildigestFrequencyCallback(select) {
  $('.maildigest-frequency-field').hide();
  if ($(select).val() == 'weekly') {
    $('#maildigest-weekly-wrapper').show();
  }
  else if ($(select).val() == 'monthly') {
    $('#maildigest-monthly-wrapper').show();
  }
}
