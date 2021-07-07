# SOLID

|            SRP             |       OCP                                  |   LSP                    |          ISP               | DIP                        |
|-------------------------|-----------------------------------------|-----------------------|-------------------------|-------------------------|
|     Robert C. Martin    |     Bertrand Meyer (Eiffel language)    |     Barbara Liskov    |     Robert C. Martin    |     Robert C. Martin    |
|    |     |     In polymorphism, see the is-a relationship as a can-be-substituted-for relationship. If an object quacks like a duck, and walks like a duck, but needs batteries, probably you have the wrong abstraction.   |    Use Role interfaces instead of Header interfaces.   |         |
|          ![](solid/srp.jpg)               |     ![](solid/ocp.jpg)                                    |      ![](solid/isp.jpg)                 |              ![](solid/isp.jpg)           |           ![](solid/dip.jpg)              |

Code problems that SOLID addresses:
- Rigidity:	Difficult  to change
- Fragility:	Easy to break
- Immobility:	Difficult to reuse
- Viscosity:	Difficult to do the right thing
