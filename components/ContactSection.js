import Button from "./Button";
import Item from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Contact() {
    return (
        <section className="container mx-auto px-10 2xl:px-0" id="contact">
            <div className="bg-primarygray rounded-lg flex flex-wrap">
                <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
                    <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraph left>Cara Menghubungi Saya</SectionParagraph>

                        <Item
                            icon="/mail.svg"
                            label="Email"
                            value="faisadityaperdana@gmail.com"
                            className="mt-10"
                        />
                        <Item
                            icon="/phone.svg"
                            label="Phone"
                            value="089846830"
                            className="mt-6"
                        />
                        <Item
                            icon="/instagram.svg"
                            label="Instagram"
                            value="@faisaditya"
                            className="mt-6"
                        />
                    </div>

                </div>
                <div className="md:w-6/12 w-full">
                    <form className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <div className="flex flex-wrap -mx-4 ">
                            <div className="lg:w-6/12 w-full px-4">
                                <Field
                                    label="Name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="lg:w-6/12 w-full px-4">
                                <Field
                                    label="Email"
                                    name="email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Field
                            label="Subject"
                            name="subject"
                            type="text"
                        />
                        <Field
                            label="Message"
                            name="message"
                            type="textarea"
                            className="h-40"
                        />
                        <div className="text-right">
                            <Button variant="black" className="mx-auto">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}