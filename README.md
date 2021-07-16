# BMI and BSA

Body mass index (BMI) and body surface area (BSA) are two measures used frequently in health care, however, they are not well understood. While they are both indicators of body size, they provide very different information. What exactly do each of these measures tell us and how should they be used?

## Download or Clone
Or you can [download the repo](https://github.com/shahajahancse/bmiBsaCalculate/archive/refs/heads/master.zip) or clone it locally with this command:

```shell
git clone git@github.com:shahajahancse/bmiBsaCalculate.git
```

You can then copy the files in the js directory to your project.

```html
<script type="text/javascript" src="src/main.js"></script>
```

You will need to include at least 1 JS file (Jquery Library) to make the project work.

## Demo
`Live Example [here](https://shahajahancse.github.io/bmiBsaCalculate/). Play with the following fiddle that implements an useful, To automatically Calculate your BMI (Body Mass Index) and BSA (body surface area).

## Body Mass Index (BMI)
`BMI` is a measure used to determine a person’s degree of overweight. Calculated based on height and weight,1 BMI is easy to measure, reliable, and correlated with percentage of body fat mass. It is a more accurate estimate of total body fat compared with body weight alone.2 BMI can also help gauge a person’s risk for conditions such as heart disease, high blood pressure, type 2 diabetes, gallstones, respiratory problems, and certain cancers. One downside of measuring BMI alone is that it may overestimate body fat in athletes or people with a muscular build. Conversely, it may underestimate body fat in the elderly or in people who have lost muscle.

BMI is calculated by taking the body weight in kilograms (kg) and dividing it by the height in meters (m) squared.

While there are programs and mobile applications that will calculate BMI for you, it’s important to know the formula and how to derive the answer. Let’s practice!

Example 1: What is the BMI for Mr. Jones weighing 210 pounds with a height of 6 feet, 3 inches?
    * Convert pounds to kilograms: 210 pounds ÷ 2.2 kg/pound = 95.45 kg
    * Calculate height in meters:
        * 6 feet, 3 inches = 75 inches
        * 75 inches x 2.54 cm/inch = 190.5 centimeters (cm)
        * 190.5 cm ÷ 100 cm/m = 1.905 meters
        * Square the height (1.905 x 1.905) = 3.63 m2
    * Calculate BMI by dividing the weight by the height (m)2
        * 95.45 kg ÷ 3.63 m2 = 26.3 kg/m2

Example 1: What is the BMI for Mrs. Williams weighing 110 pounds and 5 feet, 8 inches tall?
    * 110 pounds = 50 kg
    * Calculate height in meters:
        * 5 feet, 8 inches = 68 inches
        * 68 inches x 2.54 cm/inch = 172.72 cm
        * 172.72 cm = 1.727 m
        * Square the height = 2.98 m2
    * Calculate BMI:
        * 50 kg ÷ 2.98 m2 = 16.8 kg/m2


What do these scores mean? According to the BMI Classification scale adopted by the National Institute of Health (NIH) and the World Health Organization (WHO), Mr. Jones would be considered slightly overweight, Mr. Smith would fall under the category of obese, and Mrs. Williams would be considered underweight.

The BMI scores are classified based on risk for cardiovascular disease and can be applied to people of Caucasian, Hispanic, and African-American race. However, these standards may underestimate the risk of obesity and diabetes in people of Asian and South Asian descent. A lower threshold should be used for these populations.

Measurement of waist circumference in conjunction with BMI can provide additional information on risk that is not accounted for by BMI. The NIH recommends measuring waist circumference in overweight and obese adults to assess abdominal obesity. A waist circumference > 40 inches (102 cm) for men and > 35 inches (88 cm) for women may indicate an increased risk for cardiovascular and metabolic disorders.2

When further assessing the patients above, Mr. Jones was found to have a waist circumference of 37 inches and was deemed to be at a lower risk for obesity. For Mr. Smith, measuring waist circumference is not necessary as most patients with a BMI > 35 kg/m2 are already considered at high cardiometabolic risk.

## Body Surface Area (BSA)
`BSA` measures the total surface area of the body and is used to calculate drug dosages and medical indicators or assessments. The first formula was developed by Du Bois in 1916 and since then, several others have been developed. The Mosteller formula, which is the easiest to calculate and remember, is the most commonly used formula in practice and in clinical trials.2

The Mosteller formula takes the square root of the height (cm) multiplied by the weight (kg) divided by 3600.

Let’s use the same examples above and calculate each patient’s BSA.

Example 1: Mr. Jones
    * Calculate weight in kilograms: 210 pounds ÷ 2.2 = 95.45 kg
    * Calculate height in centimeters: 6 feet, 3 inches = 75 inches x 2.54 cm/inch = 190.5 cm
    * Multiply height by weight and divide by 3600
    * (190.5 cm x 95.45 kg) ÷ 3600 = 5
    * Take the square root of 5 = 2.24 m2

Example 2: Mr. Smith
    * Weight in kg = 95.45 kg
    * Height in cm: 5 feet, 4 inches = 64 inches x 2.54 cm/inch = 162.56 cm
    * (162.56 cm x 95.45 kg) ÷ 3600 = 4.3
    * Take square root of 4.3 = 2.07 m2

Example 3: Mrs. Williams
    * Weight in kg = 50 kg
    * Height in cm: 5 feet, 8 inches = 68 inches x 2.54 cm/inch = 172.72 cm
    * (172.72 cm x 50 kg) ÷ 3600 = 2.39
    * Take square root of 2.39 = 1.55 m2

The average adult `BSA` is 1.7 m2 (1.9 m2 for adult males and 1.6 m2 for adult females). This number is used to calculate dosages for cytotoxic anticancer agents. To minimize variation in patient size, dosing for most chemotherapeutic agents use mg of drug per m2 of body surface area.2 Although this methodology has not been rigorously validated, BSA-based dosing has become the standard when prescribing most cytotoxic agents and some therapeutic monoclonal antibodies. In theory, BSA mitigates the variability of patient size and abnormal adipose tissue to help optimize drug efficacy, improve drug clearance and to minimize or prevent toxicity.2

`BSA` is also used to provide more precise measures of hemodynamic parameters such as cardiac index (CI = cardiac output divided by BSA), stroke volume index (SVI = stroke volume divided by BSA), systemic vascular resistance index (SVRI = systemic vascular resistance divided by BSA) and pulmonary vascular resistance index (PVRI = pulmonary vascular resistance divided by BSA). In addition, BSA is used to adjust creatinine clearance when comparing it with normal values to assess for the presence and severity of kidney disease.2

Let’s look at cardiac index. If Mr. Jones, whose `BSA` is 2.24 m2, has a cardiac output of 4.3 L/min, his cardiac index would be 1.92 L/min/m2 (4.3 L/min divided by 2.24 m2). If Mrs. Williams, whose `BSA` is 1.55 m2, has the same cardiac output of 4.3 L/min, her cardiac index would be 2.77 L/min/ m2. While 4.3 L/min falls within the normal range for cardiac output, Mr. Jones’ cardiac index of 1.92 L/min/m2 is below the normal range of 2.5 – 4.0 L/min/m2. Further assessment is required to determine the underlying cause of his low cardiac output and plan treatment modalities. He may require a fluid bolus for dehydration and tachycardia or an inotropic agent for heart failure.

I hope this topic of `BMI` and `BSA` was helpful. Have a nice day.
