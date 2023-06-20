import React from 'react';
import styles from './TestingMaterialsPage.module.scss';

export const TestingMaterialsPage = () => {
    return (
        <>
            <h1>Test materials</h1>
            <article>
                <p>This page contains the HTML elements I use in the UI test cases. </p>
            </article>
            <h2>Test form</h2>
            <form className={styles.exampleForm}>
                <label htmlFor={'textInput'} className={styles.exampleFormTitle}>
                    Text input
                </label>
                <input type='text' placeholder={'Write here'} id={'textInput'} className={styles.exampleFormInput} />
                <button type='button' data-testid={'my-button'} className={styles.exampleFormButton}>
                    Click me
                </button>
            </form>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <article>
                <h2>This is a sample text</h2>
                <section aria-label={'lorem ipsum first section'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra laoreet augue, quis tempus
                    diam auctor ac. Sed eu maximus ipsum, et vulputate ligula. Nulla ullamcorper consectetur lacinia.
                    Vivamus accumsan tellus vitae enim congue convallis. Ut vitae accumsan erat. Morbi ornare ex in
                    libero pretium, nec condimentum nunc blandit. Donec suscipit accumsan erat ac viverra. Pellentesque
                    lobortis leo non tempus congue. Vivamus egestas tempus malesuada. Duis sed varius nibh, vel
                    malesuada massa. Integer pulvinar luctus imperdiet. In est nunc, blandit vulputate aliquam eget,
                    finibus in leo. Mauris mauris felis, rhoncus ultrices molestie vitae, pulvinar at eros. Aenean sed
                    faucibus quam. Praesent faucibus, purus ac rutrum bibendum, turpis ante finibus leo, vitae
                    vestibulum risus sapien et nulla.
                </section>
                <section>
                    Pellentesque ultricies sem et quam ultrices, eget tincidunt nulla maximus. Curabitur rutrum semper
                    porta. Nulla ultricies, libero ac fermentum hendrerit, libero ante eleifend sapien, fermentum varius
                    ex lorem pharetra nisl. Sed rutrum dui porta, porta nisl id, interdum sapien. Ut eu finibus felis,
                    sit amet tincidunt nibh. Cras a aliquet dui. Phasellus cursus rhoncus pretium. Duis sagittis urna
                    justo, at egestas lacus commodo sed. Quisque vel nibh sem. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Nulla elementum sem sed odio fermentum
                    convallis. Maecenas egestas magna vel tellus dapibus vulputate vel et ante. Pellentesque mi mauris,
                    scelerisque id eros vitae, semper lobortis nisi. Nunc luctus ultrices molestie.
                </section>
                <img src={'/images/testingMaterials/loremIpsum.webp'} alt={'lorem ipsum graphic'} />
                <section>
                    Pellentesque cursus interdum nulla, id convallis libero volutpat sed. Quisque molestie, velit
                    gravida aliquet suscipit, erat nulla lacinia odio, molestie auctor tortor lorem vel diam. In eu quam
                    mi. Vestibulum malesuada consequat tempor. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Sed pellentesque in diam et euismod. Nulla consequat mi id
                    metus faucibus lobortis. Phasellus ornare, justo ac malesuada gravida, turpis dolor pretium nunc, ut
                    venenatis lacus dolor luctus lacus. Curabitur accumsan imperdiet porta. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sit amet pharetra nisi.
                </section>
                <section>
                    Ut vestibulum orci vitae lacus congue, a varius nisl scelerisque. Nulla sed posuere dolor. Integer
                    quis mauris eu neque dapibus sodales. Sed id vulputate magna. Integer vitae iaculis eros. Donec
                    vulputate et nulla vel maximus. Quisque condimentum sollicitudin ex, quis dapibus libero volutpat
                    sed. Ut porttitor, eros in feugiat elementum, nisi dolor condimentum dolor, eget sollicitudin velit
                    enim a mi. Maecenas feugiat neque sit amet libero tristique, at ultrices sapien lacinia. Nulla in
                    scelerisque velit. Donec consequat urna dolor, quis vulputate dui commodo vitae. Donec fringilla sit
                    amet eros nec porta. Nulla facilisi. Praesent ornare consectetur ullamcorper. Mauris consectetur
                    elit sed nibh consectetur, et ullamcorper neque sollicitudin. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                </section>
                <section title={'Lorem ipsum fifth section'}>
                    Duis consectetur nisi ligula, vel vehicula nulla semper ut. Fusce condimentum orci sit amet libero
                    mollis consequat. Cras sit amet nisi cursus, dapibus quam eget, ullamcorper tortor. Fusce porttitor
                    cursus dui, et fermentum ipsum consequat nec. Phasellus vel lacinia ligula. Mauris porttitor rhoncus
                    dui, eu consectetur mi bibendum vitae. Sed aliquam, libero eu pharetra posuere, lectus mauris
                    pharetra nisi, at maximus arcu metus id turpis. Sed mattis auctor felis in accumsan. In quis mi
                    hendrerit elit consectetur efficitur. Ut suscipit mattis pretium. Maecenas molestie magna elementum
                    tempor pellentesque. Aenean fringilla sed ipsum sit amet sollicitudin. Phasellus nisl dui, blandit
                    nec libero sit amet, pellentesque accumsan lacus. Curabitur sodales, tortor a tristique convallis,
                    nisi tellus ultrices purus, eget luctus sem enim vitae turpis. Nullam rutrum malesuada rutrum. Morbi
                    eu semper magna.
                </section>
            </article>
            <article>
                <h2>Testing article and section elements</h2>
                <section>
                    <h3>Some links</h3>
                    <a
                        href={'https://www.scottohara.me/blog/2021/07/16/section.html'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        Accessibility of the section element
                    </a>
                </section>
            </article>
        </>
    );
};
