import patientOne from '/challange-one-patient.png'
import patientTwo from '/challange-two-patient.png'
import patientThree from '/challange-three-patient.png'
import patientFour from '/challange-four-patient.png'
import patientFive from '/challange-five-patient.png'
import doctorOne from '/challange-one-doctor.png'
import doctorTwo from '/challange-two-doctor.png'
import doctorThree from '/challange-three-doctor.png'
import doctorFour from '/challange-four-doctor.png'
import doctorFive from '/challange-five-doctor.png'
export interface PotentialChallenge {
    id: number,
    text: string
    link: string
    className: string
}
export const POTENTIAL_CHALLENGES = [
    {
        id: 1,
        text: 'Patient not responding to first-line treatments for common conditions?',
        link: '/',
        className: 'col-start-1 col-end-3'
    },
    {
        id: 2,
        text: 'Patient presents you with a diagnostic dilemma (e.g., symptoms such as seizures or syncope correlated with multiple conditions)?',
        link: '/',
        className: 'translate-y-[40px] col-start-3 col-end-5 lg:translate-y-[0] lg:col-start-5 lg:col-end-7'
    },
    {
        id: 3,
        text: 'Patient might be a candidate for state-of-the-art therapy?',
        link: '/',
        className: 'col-start-5 col-end-7 lg:col-start-3 lg:col-end-5'
    },
    {
        id: 4,
        text: 'Patient has a family history of inherited conditions like heart disease or cancer?',
        link: '/',
        className: 'mt-16 col-start-2 col-end-4 -translate-x-[10%] lg:-translate-x-[0] lg:col-start-1 lg:col-end-3 lg:mt-0'
    },
    {
        id: 5,
        text: "Patient's tumor profile available only outside the EHR or locked in a PDF?",
        link: '/',
        className: 'mt-16 col-start-4 col-end-6 translate-x-[10%] lg:translate-x-[0] lg:col-start-5 lg:col-end-7 lg:mt-0'
    },
]
export interface Section4ChallengeData {
    id: number
    grayBubbleText: string
    whiteBubbleText: string
    magentaBubbleText: string
    patientImg: string
    doctorImg: string
}
export const PAGE_4_CHALLENGES = [
    {
        id: 1,
        grayBubbleText: 'Patient not responding to first-line treatments for common conditions?',
        whiteBubbleText: 'Pharmacogenomics helps you identify medications that are safer and more effective',
        magentaBubbleText: 'Fingertip access to test results helps eliminate “trial-and-error” prescribing practices – and accelerates patient response',
        patientImg: patientOne,
        doctorImg: doctorOne
    },
    {
        id: 2,
        grayBubbleText: 'Patient has a family history of inherited conditions like heart disease or cancer?',
        whiteBubbleText: 'Detailed genetics-focused data-gathering tools help you capture and expose risk',
        magentaBubbleText: 'In-workflow Pedigree visualization allows you to identify candidates that could benefit from genetic testing…and lead you to the best course of treatment',
        patientImg: patientTwo,
        doctorImg: doctorTwo
    },
    {
        id: 3,
        grayBubbleText: 'Patient presents you with a diagnostic dilemma (e.g., symptoms such as seizures or syncope correlated with multiple conditions)?',
        whiteBubbleText: 'Germline tests hone in on heritable factors that can inform diagnoses',
        magentaBubbleText: 'Access to meaningful and actionable results during clinical decision-making enables you to initiate preventive measures, intervene at an earlier disease stage…and, eventually, treat more successfully',
        patientImg: patientThree,
        doctorImg: doctorThree
    },
    {
        id: 4,
        grayBubbleText: 'Patient’s tumor profile available only outside the EHR or locked in a PDF?',
        whiteBubbleText: 'Somatic results are valuable for targeted therapies (but too often locked in PDFs or external lab portals)',
        magentaBubbleText: 'Eradicating the “PDF chase” improves oncology workflows and efficiency (and lowers frustration) while speeding therapeutic benefit',
        patientImg: patientFour,
        doctorImg: doctorFour
    },
    {
        id: 5,
        grayBubbleText: 'Patient might be a candidate for state-of-the-art therapy?',
        whiteBubbleText: 'Genomic science is advancing rapidly – with genetic factors potentially associated with 6,000 disorders',
        magentaBubbleText: 'Consult current knowledgebases and clinical guidelines for the latest information, or match patients with clinical trials – all within your EHR',
        patientImg: patientFive,
        doctorImg: doctorFive
    },
]