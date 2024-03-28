var totalPatient = 1200;
var emergencyAdmit= 500;
var normalAdmit = 200;
var emeragencyRelease = 100;
var normalRelease = 150;
var totalAdmit = normalAdmit + emergencyAdmit;

var totalRelease = emeragencyRelease + normalRelease ;
var presentPatient = totalPatient + totalAdmit;
var totalPresent = presentPatient - totalRelease;

alert(`Total patient at Mymensingh Medical College ${totalPatient}`);
prompt(`Emergency Patient admit: ${emergencyAdmit}`);
prompt(`Normal patient admit: ${normalAdmit}`);
prompt(`Total patient Admit: ${totalAdmit}`);
prompt(`Total present Patient: ${presentPatient}`);
prompt(`Emergency patient Release: ${emeragencyRelease}`);
prompt(`Normal patient Release: ${normalRelease}`);

prompt(`Total patient Release: ${totalRelease}`);

prompt(`Total Patient Now: ${totalPresent}`);




