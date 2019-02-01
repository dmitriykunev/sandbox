name = 'Zed A. Shaw'
age = 35 #not a lie
height_inch = 74 # inches
weight_lbs = 180 # lbs
weight_kilo = weight_lbs / 2.205
height_cm = height_inch * 2.54
eyes = 'Blue'
teeth = 'White'
hair = 'Brown'

print "Let's talk about %s." % name
print "He's %d cm tall." % height_cm
print "He's %d kilos heavy" % weight_kilo
print "Actually that's not too heavy."
print "He's got %s eyes and %s hair." % (eyes, hair)
print "His teeth are usually %s depending on the coffee." % teeth

#this line is tricky, try to get it exatly right
print "If I add %d, %d and %d I get %d." % (
age, height_cm, weight_kilo, age + height_cm + weight_kilo)
